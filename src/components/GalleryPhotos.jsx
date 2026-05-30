function GalleryCard({ image }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <Image
        src={image}
        alt="Gallery Image"
        width={600}
        height={500}
        className="w-full h-[320px] object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500" />
    </div>
  );
}