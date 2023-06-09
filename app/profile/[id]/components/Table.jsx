import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Table = ({ headings, rows, tableName }) => {
console.log({ headings, rows })
    if (tableName === "fundraisers")
        return (
            <div className="overflow-x-auto w-full border-2 border-slate-200 rounded-xl">
                <table className="table w-full rounded-md  ">
                    <thead>
                        <tr>
                            {headings.map((heading) => (
                                <th key={heading} className="font-bold">
                                    {heading}
                                </th>
                            ))}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            rows.map((row, index) => (
                                <tr key={index} className=''>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <Image src={row.thumbnail} alt="Thumbnail" fill />
                                                    {/* <Image src='https://pocketbase-production-fba8.up.railway.app/api/files/hnegkanjgczax8z/s4hg3mounz9ih6x/portrait_pic_YSVQd3qhi4.jpg?token=' alt="Thumbnail" fill /> */}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{row[headings[0].toLowerCase()]}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='max-w-xs inline-block max-h-20 truncate'>{row[headings[1].toLowerCase()]}</p>
                                    </td>
                                    <td className={"truncate"}>
                                        {row[headings[2].toLowerCase()]}
                                    </td>
                                    <td className={"truncate"}>
                                        {row[headings[3].toLowerCase()]}
                                    </td>
                                    <td>

                                        <Link href={row.link || ''}
                                          className='bg-eleven px-6 py-2 rounded-md text-white border-2 border-eleven font-bold text-md transition-all duration-200 hover:bg-opacity-10 hover:text-eleven flex justify-center items-center'
                                          >Details</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
      else if (tableName === 'Volunteer History') {
      return (
        <div className="w-full border-2 border-slate-200 rounded-xl">
          <table className="table w-full rounded-md">
            <thead>
            <tr>
              {headings.map((heading) => (
                <th key={heading} className="font-bold">
                  {heading}
                </th>
              ))}
            </tr>
            </thead>
            <tbody className="">
            {rows.map((row, index) => (
              <tr key={index} className="">
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{row[headings[0].toLowerCase()]}</div>
                      <div className="text-sm opacity-50">{row.category}</div>
                    </div>
                  </div>
                </td>
                <td className="truncate">{row[headings[1].toLowerCase()]}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      );
    }
    else
        return (
            <div className="overflow-x-auto w-full border-2 border-slate-200 rounded-xl">
                <table className="table w-full rounded-md  ">
                    {/* head */}
                    <thead>
                        <tr>
                            {headings.map((heading) => (
                                <th key={heading} className="font-bold">
                                    {heading}
                                </th>
                            ))}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            rows.map((row, index) => (
                                <tr key={index} className=''>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <Image src={row.thumbnail} alt="Thumbnail" fill />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{row[headings[0].toLowerCase()]}</div>
                                                {/* <div className="text-sm opacity-50">{row.categories[0]}</div> */}
                                            </div>
                                        </div>
                                    </td>
                                    {/* <td className='max-w-xs whitespace-nowrap truncate '> */}
                                    <td >
                                        <p className='max-w-xs inline-block max-h-20 truncate'>{row[headings[1].toLowerCase()]}</p><p className='inline'>...</p>
                                    </td>
                                    <td className={"truncate"}>
                                        {row[headings[2].toLowerCase()]}
                                    </td>
                                    <td>
                                        <Link href={row.link || ''} 
                                          className='bg-eleven px-6 py-2 rounded-md text-white border-2 border-eleven font-bold text-md transition-all duration-200 hover:bg-opacity-10 hover:text-eleven flex justify-center items-center'
                                        >Details</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
}

export default Table