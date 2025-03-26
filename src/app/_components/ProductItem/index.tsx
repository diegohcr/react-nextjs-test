import { memo } from 'react';
import Image from 'next/image';

type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const ProductItem = memo(({ product }: { product: Photo }) => {
  return (
    <div className="card overflow-hidden rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.2)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:scale-[1.02]">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={
            'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
          priority={true}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="card-header px-5 py-4">
        <h3 className="card-title truncate">{product.title}</h3>
      </div>
      <div className="card-content px-5 pb-5">
        <p className="text-muted-foreground text-sm">
          Album ID: {product.albumId}
        </p>
        <div className="mt-4 flex justify-center">
          <a
            href="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary py-2 px-4 text-xs bg-blue-700 rounded-lg text-white"
          >
            View Full Size
          </a>
        </div>
      </div>
    </div>
  );
});

export default ProductItem;
