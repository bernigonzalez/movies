import ResultCard from './ResultCard'

function Results({results}) {
    
  return (
    <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3'>
    {
        results?.map((r) => (
            <ResultCard key={r.id} results={r}/>

        )
            
        )
    }
    </div>
  )
}

export default Results