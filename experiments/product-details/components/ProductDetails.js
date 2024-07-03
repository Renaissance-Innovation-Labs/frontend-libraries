import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { details } from './data';

const Button = ({ link, href, ctaText, action }) => {
  if (link) {
    return (
      <Link href={href}>
        <button
          className="bg-black w-fit text-white rounded-md text-xs py-2 px-8"
          onClick={action}
        >
          {ctaText}
        </button>
      </Link>
    );
  } else {
    return (
      <button
        className="bg-black w-fit text-white rounded-md text-xs py-2 px-8"
        onClick={action}
      >
        {ctaText}
      </button>
    );
  }
};

export const ProductDetails = ({ link, href, ctaText, action, changeView }) => {
  const [active, setActive] = useState(details?.imgs[0]);

  const newH = (1 / details?.imgs?.length) * 100 + '%';

  return (
    <section className=" bg-white shadow-lg w-full max-w-xl  max-h-fit p-4 rounded-lg">
      <div className=" grid grid-cols-1 lg:grid-cols-12 gap-3 h-full w-full mt-8">
        <div
          className={`lg:col-span-8  flex flex-col-reverse gap-2 ${
            changeView && 'lg:flex-row'
          } `}
        >
          <div
            className={` w-full flex justify-between gap-1 ${
              changeView && 'lg:w-1/4 lg:flex-col'
            } `}
          >
            {details?.imgs?.map((item) => (
              <div
                key={item.id}
                onClick={() => setActive(item)}
                className={`${
                  active?.src === item.src && 'border-2 border-black'
                } cursor-pointer relative w-full bg-gray-200 rounded-lg overflow-hidden ${
                  changeView ? `h-20 lg:h-[${newH}]` : 'h-20'
                }  
                
                  `}
              >
                <Image
                  fill={true}
                  object-fit="cover"
                  src={item.src}
                  alt="product img"
                />
              </div>
            ))}
          </div>

          <div className="bg-gray-200 w-full  lg:flex-1 h-64 lg:h-auto  rounded-lg relative overflow-hidden">
            <Image
              alt="Mountains"
              src={active?.src}
              quality={100}
              fill
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
              priority
            />
          </div>
        </div>

        <article className="lg:col-span-4">
          <div className="w-full h-full flex flex-col gap-y-4 justify-between">
            <div>
              <h3 className="text-base font-semibold text-black">
                New Air Max
              </h3>

              <div>
                <span className="font-medium text-xs text-[#8F9499]">
                  342 Reviews
                </span>
              </div>
            </div>

            <div>
              <span className="text-base font-semibold">$822</span>
              <p className="font-medium text-xs text-[#8F9499]">
                save 20% when you order now
              </p>
            </div>

            <div>
              <span className="text-sm font-semibold text-black">
                Description
              </span>

              <ul className=" indent-3 mb-1">
                <li className=" list-item list-disc list-inside text-[#8F9499] text-xs">
                  100% leather sole
                </li>
                <li className=" list-item list-disc list-inside text-[#8F9499] text-xs">
                  Water proof
                </li>
                <li className=" list-item list-disc list-inside text-[#8F9499] text-xs">
                  Comfortable
                </li>
              </ul>
            </div>

            <div className="flex gap-x-1">
              <div className="w-fit border-[0.5px] text-xs text-black font-medium border-[#ABAFB2] p-1 ">
                40
              </div>
              <div className="w-fit border-[0.5px] text-xs text-black font-medium border-[#ABAFB2] p-1 ">
                42
              </div>
              <div className="w-fit border-[0.5px] text-xs text-black font-medium border-[#ABAFB2] p-1 ">
                44
              </div>
              <div className="w-fit border-[0.5px] text-xs text-black font-medium border-[#ABAFB2] p-1 ">
                44
              </div>
              <div className="w-fit border-[0.5px] text-xs text-black font-medium border-[#ABAFB2] p-1 ">
                46
              </div>
            </div>

            <div>
              <Button
                link={link}
                href={href}
                action={action}
                ctaText={ctaText}
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
