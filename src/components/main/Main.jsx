import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import Card from './Card'
import { Context } from '../../context/Context'

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

  const card = [
    {
        desc: "Suggest beautiful places to see on an upcoming road trip",
        img: assets.compass_icon
    },
    {
        desc: "Briefly summarize this concept: urban planning",
        img: assets.bulb_icon
    },
    {
        desc: "Suggest beautiful places to see on an upcoming road trip",
        img: assets.message_icon
    },
    {
        desc: "Suggest beautiful places to see on an upcoming road trip",
        img: assets.code_icon
    }
  ]

  return (
    <div className='main'>
        <div className='nav'>
            <p>SamvadAI</p>
            <img src={assets.user_icon} alt='' />
        </div>
        <div className='mainContainer'>

            {!showResult ? <>
                <div className='greet'>
                    <p><span>Hello, User.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className='cards'>
                    {card.map((cardItem, index) => {
                        return <Card 
                            key={index}
                            desc={cardItem.desc}
                            img={cardItem.img}
                        />
                    })}
                </div>
            </> : 
            <div className='result'>
                <div className='resultTitle'>
                    <img src={assets.user_icon} alt='' />
                    <p>{recentPrompt}</p>
                </div>
                <div className='resultData'>
                    <img src={assets.gemini_icon} alt='' />
                    {loading ? 
                    <div className="loader">
                        <hr />
                        <hr />
                        <hr />
                    </div> :
                    <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                </div>
            </div>
            }
            
        </div>
        <div className='mainBottom'>
            <div className='searchBox'>
                <input onChange={(e)=>setInput(e.target.value)} type='text' placeholder='Enter a prompt here' />
                <div>
                    <img src={assets.gallery_icon} alt='' />
                    <img src={assets.mic_icon} alt='' />
                    {input && <img onClick={()=> onSent()} src={assets.send_icon} alt='' />}
                </div>
            </div>
            <p className='bottomInfo'>
                Gemini may display inaccurate info, including about people so double check its responses. Your privacy and Gemini Apps
            </p>
        </div>
    </div>
  )
}

export default Main