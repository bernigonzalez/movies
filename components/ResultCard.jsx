import { ThumbUpIcon } from '@heroicons/react/outline'
import Image from 'next/image'

function ResultCard({results}) {

    const BASE_URL = "https://image.tmdb.org/t/p/original/"

  return (
    <div className='cursor-pointer group p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
        <Image 
        layout='responsive'
        height={1080}
        width={1920}
        src={`${BASE_URL}${results.backdrop_path || results.poster_path}`  }/>

        <div className='p-2'>
            <p className='truncate max-w-md'>{results.overview}</p>
            <h2 className=' mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold' 
            >{results.title || results.original_name}</h2>

            <p className='flex items-center opacity-0 group-hover:opacity-100'>
                {results.release_date || results.first_air_date}
                <ThumbUpIcon className='h-5 mx-2' />   {results.vote_count}
            </p>
        </div>
    </div>
  )
}

export default ResultCard