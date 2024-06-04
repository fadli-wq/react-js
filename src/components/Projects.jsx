import React from 'react'
import ProjectItem from './ProjectItem'
import dataImg from '../assets/img/data.jpg'
import gameImg from '../assets/img/game.jpg'
import webImg from '../assets/img/web.jpg'
import designImg from '../assets/img/design.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
            Berikut ini merupakan project yang pernah saya bikin khususnya dibidang yang saya kuasai yaitu web development, game testing, data analysis, and UI/UX design.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={dataImg} title='Data Analist'/>
            <ProjectItem img={gameImg} title='Game Testing'/>
            <ProjectItem img={webImg} title='Web Developer'/>
            <ProjectItem img={designImg} title='Ui/Ux Design'/>
        </div>
    </div>
  );
};

export default Projects