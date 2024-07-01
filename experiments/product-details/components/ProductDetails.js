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

// export const ProductDetails = ({ link, href, ctaText, action }) => {
//   const [active, setActive] = useState(details?.imgs[0]);

//   return (
//     <section className=" bg-white shadow-lg w-full max-w-2xl  max-h-fit p-4 rounded-lg">
//       <div className="grid grid-cols-1 md:grid-cols-8 gap-3 h-full w-full">
//         {/* images preview */}
//         <div className="md:col-span-5 flex gap-2 h-full">
//           <div className=" w-1/4 flex flex-col gap-1 rounded-lg">
//             {details?.imgs?.map((item) => (
//               <button key={item.id} onClick={() => setActive(item)}>
//                 <div
//                   className={`${
//                     active?.src === item.src && 'border-2 border-black'
//                   } relative h-20 w-full bg-gray-200 rounded-lg overflow-hidden`}
//                 >
//                   <Image
//                     fill={true}
//                     object-fit="cover"
//                     src={item.src}
//                     alt="product img"
//                   />
//                 </div>
//               </button>
//             ))}
//           </div>

//           {/* active image */}
//           <div className="bg-gray-200 flex-1 rounded-lg relative overflow-hidden">
//             <Image
//               src={active?.src}
//               alt="preview"
//               fill={true}
//               object-fit="cover"
//             />
//           </div>
//         </div>

//         {/* details */}
//         <article className="md:col-span-3">
//           <div className="w-full h-full flex flex-col justify-between">
//             <div>
//               <h3 className="text-base font-semibold text-black">
//                 New Air Max
//               </h3>

//               <div>
//                 <span className="font-medium text-xs text-[#8F9499]">
//                   342 Reviews
//                 </span>
//               </div>
//             </div>

//             <div>
//               <span className="text-base font-semibold">$822</span>
//               <p className="font-medium text-xs text-[#8F9499]">
//                 save 20% when you order now
//               </p>
//             </div>

//             <div>
//               <span className="text-sm font-semibold text-black">
//                 Description
//               </span>

//               <ul className=" indent-3 mb-1">
//                 <li className=" list-item list-disc list-inside text-[#8F9499] text-xs">
//                   100% leather sole
//                 </li>
//                 <li className=" list-item list-disc list-inside text-[#8F9499] text-xs">
//                   Water proof
//                 </li>
//                 <li className=" list-item list-disc list-inside text-[#8F9499] text-xs">
//                   Comfortable
//                 </li>
//               </ul>
//             </div>

//             <div className="flex gap-x-1">
//               <div className="w-fit border-[0.5px] text-[10px] text-black font-medium border-[#ABAFB2] p-1 ">
//                 40
//               </div>
//               <div className="w-fit border-[0.5px] text-[10px] text-black font-medium border-[#ABAFB2] p-1 ">
//                 42
//               </div>
//               <div className="w-fit border-[0.5px] text-[10px] text-black font-medium border-[#ABAFB2] p-1 ">
//                 44
//               </div>
//               <div className="w-fit border-[0.5px] text-[10px] text-black font-medium border-[#ABAFB2] p-1 ">
//                 44
//               </div>
//               <div className="w-fit border-[0.5px] text-[10px] text-black font-medium border-[#ABAFB2] p-1 ">
//                 46
//               </div>
//             </div>

//             <div>
//               <Button
//                 link={link}
//                 href={href}
//                 action={action}
//                 ctaText={ctaText}
//               />
//             </div>
//           </div>
//         </article>
//       </div>
//     </section>
//   );
// };

export const HProductDetails = ({ link, href, ctaText, action }) => {
  const [active, setActive] = useState(details?.imgs[0]);

  const [changeO, setChangeO] = useState(true);

  const newW = (1 / details?.imgs?.length) * 100 + '%';
  const newH = (1 / details?.imgs?.length) * 100 + '%';

  console.log({ newW });

  return (
    <section className=" bg-white shadow-lg w-full max-w-xl  max-h-fit p-4 rounded-lg">
      <div className=" grid grid-cols-1 lg:grid-cols-12 gap-3 h-full w-full mt-8">
        <div
          className={`lg:col-span-8  flex flex-col-reverse gap-2 ${
            changeO && 'lg:flex-row'
          } `}
        >
          <div
            className={` w-full flex justify-between gap-1 ${
              changeO && 'lg:w-1/4 lg:flex-col'
            } `}
          >
            {details?.imgs?.map((item) => (
              <div
                key={item.id}
                onClick={() => setActive(item)}
                className={`${
                  active?.src === item.src && 'border-2 border-black'
                } cursor-pointer relative h-20 w-full bg-gray-200 rounded-lg overflow-hidden`}
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
            />
            {/* <Image
              fill={true}
              sizes="(min-width: 808px) 50vw, 100vw"
              style={{
                objectFit: 'cover', // cover, contain, none
              }}
              src={active?.src}
              alt="preview"
            /> */}
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
