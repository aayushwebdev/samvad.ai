import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';

const Sidebar = () => {

    const [expanded, setExpanded] = useState(false);
    const {onSent, prevPrompts, setRecentPrompt,newChat} = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

  return (
    <div className='sidebar'>
        <div className='top'>
            <img onClick={() => setExpanded(prev => !prev)} className='menu' src={assets.menu_icon} alt='' />
            <div className='newChat' onClick={()=>newChat()}>
                <img src={assets.plus_icon} alt='' />
                {expanded && <p>New Chat</p>}
            </div>
            {expanded && <div className='recent'>
                <p className='recentTitle'>Recent</p>
                {prevPrompts.map((item,index)=>{
                   return ( 
                        <>
                            <div className='recentEntry' onClick={()=>loadPrompt(item)}>
                                <img src={assets.message_icon} alt='' />
                                <p>{item.slice(0,18)} ...</p>
                            </div>
                        </>
                   )
                })}
                
            </div>}
        </div>
        <div className='bottom'>
            <div className='bottomItem recentEntry'>
                <img src={assets.question_icon} alt='' />
                {expanded && <p>Help</p>}
            </div>
            <div className='bottomItem recentEntry'>
                <img src={assets.history_icon} alt='' />
                {expanded && <p>Activity</p>}
            </div>
            <div className='bottomItem recentEntry'>
                <img src={assets.setting_icon} alt='' />
                {expanded && <p>Settings</p>}
            </div>
        </div>
    </div>
  )
}

export default Sidebar