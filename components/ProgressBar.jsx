
export default function ProgressBar({skill, porcentaje}) {
    return(
    <>
        <h5 className="py-3">{skill}</h5>
        <div className='progress'>
            <div className='progress-bar' role='progress-bar' style={{width:`${porcentaje}`}}></div>
        </div>
    </>
    )
}