import { ArrowUpRight } from 'lucide-react';

interface AdBoxProps {
  imageUrl: string;
  title: string;
  price: string;
  link: string;
}

const AdBox = ({ imageUrl, title, price, link }: AdBoxProps) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg transition-transform hover:scale-105">
      <a href={link} className="block">
        <div className="relative">
          <img src={imageUrl} alt={title} className="w-full aspect-square object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
            <div className="flex justify-between items-center">
              <span className="font-kodchasan text-base">Shop Now</span>
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-kodchasan text-lg font-bold mb-2">{title}</h3>
          <p className="font-kodchasan text-base text-gray-700">{price}</p>
        </div>
      </a>
    </div>
  );
};

export default AdBox;