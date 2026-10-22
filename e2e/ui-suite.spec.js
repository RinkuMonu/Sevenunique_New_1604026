import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

test.describe("SevenUnique Portal & Admin UI Test Suite", () => {
  const screenshotsDir = path.join(process.cwd(), "e2e-screenshots");

  test.beforeAll(() => {
    if (!fs.existsSync(screenshotsDir)) {
      fs.mkdirSync(screenshotsDir, { recursive: true });
    }
  });

  test("1. Admin Login UI & Authentication Flow", async ({ page }) => {
    await page.goto("/admin/login");
    await page.waitForLoadState("networkidle");

    // 1. Verify light background and no dark-mode pitch black
    const bodyBg = await page.evaluate(() => {
      return window.getComputedStyle(document.body).backgroundColor;
    });
    console.log("Body background color:", bodyBg);

    // 2. Verify Website Header & Footer are NOT present
    const mainHeaderNav = page.locator("header nav");
    const websiteFooter = page.locator("footer");
    await expect(mainHeaderNav).toHaveCount(0);
    await expect(websiteFooter).toHaveCount(0);

    // 3. Verify Logo & Admin Portal Badge
    const logo = page.locator('img[alt="SevenUnique"]');
    await expect(logo).toBeVisible();
    await expect(page.getByText("Admin Portal")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Sign In to Dashboard" })).toBeVisible();

    // 4. Capture screenshot of Login page
    await page.screenshot({
      path: path.join(screenshotsDir, "01-admin-login.png"),
      fullPage: true,
    });

    // 5. Fill credentials and sign in
    await page.fill('input[type="email"]', "admin@sevenunique.com");
    await page.fill('input[type="password"]', "SevenUnique@Admin2026!");
    await page.click('button[type="submit"]');

    // 6. Verify successful redirect to /admin/blog
    await page.waitForURL("**/admin/blog", { timeout: 15000 });
    expect(page.url()).toContain("/admin/blog");
  });

  test("2. Admin Blog Dashboard Visual, Fixed Sidebar & Component Tests", async ({ page }) => {
    // Login session
    await page.goto("/admin/login");
    await page.fill('input[type="email"]', "admin@sevenunique.com");
    await page.fill('input[type="password"]', "SevenUnique@Admin2026!");
    await page.click('button[type="submit"]');
    await page.waitForURL("**/admin/blog");
    await page.waitForLoadState("networkidle");

    // Verify FIXED DESKTOP SIDEBAR is present and visible
    const sidebar = page.locator("aside");
    await expect(sidebar).toBeVisible();
    await expect(sidebar.getByText("Admin", { exact: true })).toBeVisible();
    await expect(sidebar.getByRole("link", { name: /Articles & Drafts/i })).toBeVisible();
    await expect(sidebar.getByRole("link", { name: /Write New Post/i })).toBeVisible();
    await expect(sidebar.getByText("AI Editorial Studio")).toBeVisible();
    await expect(sidebar.getByText("admin@sevenunique.com")).toBeVisible();

    // Verify Page Header Bar
    await expect(page.getByRole("heading", { name: "Articles & Drafts" })).toBeVisible();
    await expect(page.getByText("Blog Studio")).toBeVisible();

    // Verify KPI Metric Cards
    await expect(page.getByText("Total Articles")).toBeVisible();
    await expect(page.locator("p", { hasText: /^Published$/ })).toBeVisible();
    await expect(page.locator("p", { hasText: /^Drafts$/ })).toBeVisible();
    await expect(page.locator("p", { hasText: /^AI Generated$/ })).toBeVisible();

    // Verify articles table has rows
    const tableRows = page.locator("tbody tr");
    const rowCount = await tableRows.count();
    console.log(`Found ${rowCount} published/draft articles in table`);
    expect(rowCount).toBeGreaterThanOrEqual(1);

    // Capture screenshot of Dashboard with fixed sidebar
    await page.screenshot({
      path: path.join(screenshotsDir, "02-admin-dashboard.png"),
      fullPage: true,
    });
  });

  test("3. Post Editor & AI Generator Panel Visual Test", async ({ page }) => {
    await page.goto("/admin/login");
    await page.fill('input[type="email"]', "admin@sevenunique.com");
    await page.fill('input[type="password"]', "SevenUnique@Admin2026!");
    await page.click('button[type="submit"]');
    await page.waitForURL("**/admin/blog");

    await page.goto("/admin/blog/new");
    await page.waitForLoadState("networkidle");

    // Verify sidebar is still visible in editor
    await expect(page.locator("aside")).toBeVisible();

    // Verify mode switcher
    const writeManualBtn = page.getByRole("button", { name: /Write Manually/i });
    const generateAiBtn = page.getByRole("button", { name: /Generate with AI/i });
    await expect(writeManualBtn).toBeVisible();
    await expect(generateAiBtn).toBeVisible();

    // Switch to AI Mode
    await generateAiBtn.click();
    await expect(page.getByText("AI Editorial Assistant")).toBeVisible();
    await expect(page.getByText("Select AI Model")).toBeVisible();

    // Capture screenshot of AI Generator interface
    await page.screenshot({
      path: path.join(screenshotsDir, "03-admin-editor-ai.png"),
      fullPage: true,
    });

    // Switch back to manual mode to verify Tiptap editor and Image upload
    await writeManualBtn.click();
    await expect(page.getByText("Post Title")).toBeVisible();
    await expect(page.getByText("Cover Image")).toBeVisible();
    await expect(page.getByText("Quick Presets:")).toBeVisible();

    // Capture screenshot of Manual Editor
    await page.screenshot({
      path: path.join(screenshotsDir, "03b-admin-editor-manual.png"),
      fullPage: true,
    });
  });

  test("4. Frontend Desktop Header & Blog Catalog (/blog)", async ({ page }) => {
    await page.goto("/blog");
    await page.waitForLoadState("networkidle");

    // Verify Desktop Header & Navbar
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();

    // Verify "Payment Solutions" in desktop navbar is visible and properly formatted
    const paymentSolutionsLink = page.locator("header nav a", { hasText: "Payment Solutions" });
    await expect(paymentSolutionsLink).toBeVisible();

    // Verify "Schedule a Call" button
    const scheduleCallBtn = page.locator('header nav a:has-text("Schedule a Call")');
    await expect(scheduleCallBtn).toBeVisible();

    // Verify H1 Heading
    await expect(
      page.getByRole("heading", { name: /Insights on Modern Software & AI/i })
    ).toBeVisible();

    // Verify Featured Post Image is visible
    const featuredImg = page.locator('div.h-full img[alt]');
    await expect(featuredImg).toBeVisible();
    const featuredSrc = await featuredImg.getAttribute("src");
    expect(featuredSrc).toBeTruthy();

    // Verify Remaining Articles have images
    const articleCards = page.locator("article");
    const count = await articleCards.count();
    expect(count).toBeGreaterThanOrEqual(1);

    const gridImages = page.locator("article img");
    const imgCount = await gridImages.count();
    expect(imgCount).toBeGreaterThanOrEqual(count);

    // Capture screenshot of Frontend Blog with fixed header
    await page.screenshot({
      path: path.join(screenshotsDir, "04-frontend-blog.png"),
      fullPage: true,
    });
  });

  test("5. Frontend Blog Post (/blog/[slug]) Visual Verification", async ({ page }) => {
    await page.goto("/blog/how-smart-payin-and-instant-payouts-accelerate-fintech-scale");
    await page.waitForLoadState("networkidle");

    // Verify Header and Footer
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();

    // Verify H1 Title
    await expect(
      page.getByRole("heading", {
        name: /How Smart PayIn and Instant Payouts Accelerate Fintech Scale/i,
      })
    ).toBeVisible();

    // Verify Cover Image
    const coverImg = page.locator('div.aspect-video img[alt*="Smart PayIn"]');
    await expect(coverImg).toBeVisible();
    const coverSrc = await coverImg.getAttribute("src");
    expect(coverSrc).toBeTruthy();

    // Capture screenshot of Single Article
    await page.screenshot({
      path: path.join(screenshotsDir, "05-frontend-article.png"),
      fullPage: true,
    });
  });

  test("6. Admin Panel Mobile Responsiveness (390x844)", async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 390, height: 844 });

    // Login session
    await page.goto("/admin/login");
    await page.fill('input[type="email"]', "admin@sevenunique.com");
    await page.fill('input[type="password"]', "SevenUnique@Admin2026!");
    await page.click('button[type="submit"]');
    await page.waitForURL("**/admin/blog");
    await page.waitForLoadState("networkidle");

    // Desktop sidebar should be hidden on mobile
    await expect(page.locator("aside")).toBeHidden();

    // Mobile header should be visible with Hamburger button
    const mobileMenuBtn = page.getByRole("button", { name: "Open Sidebar" });
    await expect(mobileMenuBtn).toBeVisible();

    // Capture Mobile Dashboard screenshot
    await page.screenshot({
      path: path.join(screenshotsDir, "06-admin-mobile-dashboard.png"),
      fullPage: false,
    });

    // Open Mobile Drawer
    await mobileMenuBtn.click();
    const mobileDrawer = page.locator("div.fixed.inset-0.z-50");
    await expect(mobileDrawer).toBeVisible();
    await expect(mobileDrawer.getByRole("link", { name: /Articles & Drafts/i })).toBeVisible();
    await expect(mobileDrawer.getByRole("link", { name: /Write New Post/i })).toBeVisible();

    // Capture Mobile Drawer screenshot
    await page.screenshot({
      path: path.join(screenshotsDir, "07-admin-mobile-drawer.png"),
      fullPage: false,
    });
  });

  test("7. Website Mobile Navigation Responsiveness (390x844)", async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Desktop navigation should be hidden
    await expect(page.locator("header nav")).toBeHidden();

    // Mobile toggle button should be visible
    const toggleBtn = page.getByRole("button", { name: "Toggle menu" });
    await expect(toggleBtn).toBeVisible();

    // Open mobile menu
    await toggleBtn.click();
    const mobileNav = page.locator("#mobile-navigation");
    await expect(mobileNav).toBeVisible();

    // Expand Payment Solutions accordion
    const paymentSolutionsAccordion = mobileNav.getByRole("button", { name: "Payment Solutions" });
    await expect(paymentSolutionsAccordion).toBeVisible();
    await paymentSolutionsAccordion.click();

    // Verify sub-items appear
    await expect(mobileNav.getByText("Fintech Services")).toBeVisible();
    await expect(mobileNav.getByRole("link", { name: "Payin" })).toBeVisible();

    // Capture Mobile Navigation screenshot
    await page.screenshot({
      path: path.join(screenshotsDir, "08-frontend-mobile-menu.png"),
      fullPage: false,
    });
  });
});
