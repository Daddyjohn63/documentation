import NextImage from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export function Image({ src, alt, width = 800, height = 600 }: ImageProps) {
  return (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ width: '100%', height: 'auto' }}
        priority
      />
    </div>
  );
}
