
// 'use client';

// import { ProductType } from '../interfaces';
// import Image from 'next/image';
// import { FC, useState } from 'react';

// interface Props {
// 	product: ProductType;
// 	fill?: boolean;
// }

// const CustomImage: FC<Props> = ({ product, fill }) => {
// 	const [isLoading, setIsLoading] = useState(true);

// 	return (
// 		<>
// 		{fill ? (
// 			<Image
// 			src={product.image}
// 			alt={product.title}
// 			fill
// 			className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
// 				isLoading
// 					? 'scale-110 blur-2xl grayscale'
// 					: 'scale-100 blur-0 grayscale-0'
// 			}}`}
// 			onLoadingComplete={() => setIsLoading(false)}
// 		/>
// 		) : (
// 			<Image
// 			src={product.image}
// 			alt={product.title}
// 			width={400}
// 			height={1000}
// 			className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
// 				isLoading
// 					? 'scale-110 blur-2xl grayscale'
// 					: 'scale-100 blur-0 grayscale-0'
// 			}}`}
// 			onLoadingComplete={() => setIsLoading(false)}
// 		/>
// 		) }
		
// 		</>
		
// 	);
// };

// export default CustomImage;



'use client';

import { ProductType } from '../interfaces';
import Image from 'next/image';
import { FC, useState } from 'react';

interface Props {
  product: ProductType;
  fill?: boolean;
}

const CustomImage: FC<Props> = ({ product, fill }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Default tasvir manzilini o'rnating
  const defaultImage = '/path/to/default/image.png'; 

  return (
    <>
      {product.image ? ( // `product.image` mavjudligini tekshirish
        fill ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
              isLoading
                ? 'scale-110 blur-2xl grayscale'
                : 'scale-100 blur-0 grayscale-0'
            }`}
            onLoadingComplete={() => setIsLoading(false)}
          />
        ) : (
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={1000}
            className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
              isLoading
                ? 'scale-110 blur-2xl grayscale'
                : 'scale-100 blur-0 grayscale-0'
            }`}
            onLoadingComplete={() => setIsLoading(false)}
          />
        )
      ) : (
        // Tasvir mavjud bo'lmasa, default tasvirni ko'rsatish
        <Image
          src={defaultImage}
          alt="Default Image"
          fill={fill}
          className={`object-contain duration-700 ease-in-out ${
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          }`}
          onLoadingComplete={() => setIsLoading(false)}
        />
      )}
    </>
  );
};

export default CustomImage;
