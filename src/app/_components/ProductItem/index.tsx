import { memo } from 'react';

const ProductItem = memo(
  ({ product }: { product: { id: number; title: string } }) => {
    return (
      <li key={product.id} className="border p-4 rounded shadow">
        <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
        <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
      </li>
    );
  },
);

export default memo(ProductItem);
