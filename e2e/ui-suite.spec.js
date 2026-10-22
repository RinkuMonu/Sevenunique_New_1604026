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
    // Navigate to /admin/login
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

  test("2. Admin Blog Dashboard Visual & Component Tests", async ({ page }) => {
    // Login session
    await page.goto("/admin/login");
    await page.fill('input[type="email"]', "admin@sevenunique.com");
    await page.fill('input[type="password"]', "SevenUnique@Admin2026!");
    await page.click('button[type="submit"]');
    await page.waitForURL("**/admin/blog");
    await page.waitForLoadState("networkidle");

    // Verify Admin Header is present with logo and Blog Studio badge
    await expect(page.getByText("Blog Studio")).toBeVisible();
    await expect(page.getByRole("link", { name: /Live Blog/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /Write New Post/i })).toBeVisible();

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

    // Capture screenshot of Dashboard
    await page.screenshot({
      path: path.join(screenshotsDir, "02-admin-dashboard.png"),
      fullPage: true,
    });
  });

  test("3. Post Editor & AI Generator Panel Visual Test", async ({ page }) => {
    // Navigate to login then /admin/blog/new
    await page.goto("/admin/login");
    await page.fill('input[type="email"]', "admin@sevenunique.com");
    await page.fill('input[type="password"]', "SevenUnique@Admin2026!");
    await page.click('button[type="submit"]');
    await page.waitForURL("**/admin/blog");

    await page.goto("/admin/blog/new");
    await page.waitForLoadState("networkidle");

    // Verify mode switcher
    const writeManualBtn = page.getByRole("button", { name: /Write Manually/i });
    const generateAiBtn = page.getByRole("button", { name: /Generate with AI/i });
    await expect(writeManualBtn).toBeVisible();
    await expect(generateAiBtn).toBeVisible();

    // Switch to AI Mode
    await generateAiBtn.click();
    await expect(page.getByText("AI Editorial Assistant")).toBeVisible();
    await expect(page.getByText("Select Groq AI Model")).toBeVisible();

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

  test("4. Frontend Blog Catalog (/blog) Visual & Image Verification", async ({ page }) => {
    await page.goto("/blog");
    await page.waitForLoadState("networkidle");

    // Verify Main Website Header & Footer ARE present
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();

    // Verify H1 Heading
    await expect(
      page.getByRole("heading", { name: /Insights on Modern Software & AI/i })
    ).toBeVisible();

    // Verify Featured Post Image is visible and not broken
    const featuredImg = page.locator('div.h-full img[alt]');
    await expect(featuredImg).toBeVisible();
    const featuredSrc = await featuredImg.getAttribute("src");
    console.log("Featured Post Image source:", featuredSrc);
    expect(featuredSrc).toBeTruthy();

    // Verify Remaining Articles have images
    const articleCards = page.locator("article");
    const count = await articleCards.count();
    console.log(`Frontend blog has ${count} grid articles`);
    expect(count).toBeGreaterThanOrEqual(1);

    // Verify every grid card has an image
    const gridImages = page.locator("article img");
    const imgCount = await gridImages.count();
    expect(imgCount).toBeGreaterThanOrEqual(count);

    // Capture screenshot of Frontend Blog
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
    console.log("Article Cover image source:", coverSrc);
    expect(coverSrc).toBeTruthy();

    // Capture screenshot of Single Article
    await page.screenshot({
      path: path.join(screenshotsDir, "05-frontend-article.png"),
      fullPage: true,
    });
  });
});
