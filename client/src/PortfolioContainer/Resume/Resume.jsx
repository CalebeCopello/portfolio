import React, { useState } from 'react'
import ScreenHeading from '../../utils/ScreenHeading/ScreenHeading'
import ScrollService from '../../utils/ScrollService'
import Animations from '../../utils/Animations'
import { IoSchoolOutline } from 'react-icons/io5'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { RiCodeSSlashFill } from 'react-icons/ri'
import { SiStartrek } from 'react-icons/si'
import { FaRegFilePdf } from 'react-icons/fa6'
import {
	BiLogoJavascript,
	BiLogoReact,
	BiLogoNodejs,
	BiLogoMongodb,
	BiLogoHtml5,
	BiLogoCss3,
} from 'react-icons/bi'
import { SiExpress } from 'react-icons/si'
import { PiCertificateBold } from 'react-icons/pi'
import './Resume.css'

const Resume = (props) => {
	const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
	const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({})

	const fadeInScreenHandler = (screen) => {
		if (screen.fadeInScreen !== props.id) return
		Animations.animations.fadeInScreen(props.id)
	}
	ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

	const ResumeHeading = (props) => {
		return (
			<div className='resume-heading'>
				<div className='resume-main-heading'>
					<div className='heading-bullet'></div>
					<span>{props.heading ? props.heading : ''}</span>
					{props.fromDate && props.toDate ? (
						<div className='heading-date'>
							{props.fromDate + ' - ' + props.toDate}
						</div>
					) : (
						<div> </div>
					)}
				</div>
				<div className='resume-sub-heading'>
					<span>{props.subHeading ? props.subHeading : ''}</span>
				</div>
				<div className='resume-heading-description'>
					<span>{props.description ? props.description : ''}</span>
				</div>
			</div>
		)
	}

	const resumeBullets = [
		{ label: 'Educação', logoScr: <IoSchoolOutline /> },
		{ label: 'Empregos', logoScr: <MdOutlineWorkOutline /> },
		{ label: 'Linguagens de Programação', logoScr: <RiCodeSSlashFill /> },
		{ label: 'Certificações', logoScr: <PiCertificateBold /> },
		{ label: 'Outros interesses', logoScr: <SiStartrek /> },
	]
	const programmingSkillDetails = [
		{ skill: 'HTML', logoScr: <BiLogoHtml5 /> },
		{ skill: 'CSS', logoScr: <BiLogoCss3 /> },
		{ skill: 'JavaScript', logoScr: <BiLogoJavascript /> },
		{ skill: 'ReactJs', logoScr: <BiLogoReact /> },
		{ skill: 'Node JS', logoScr: <BiLogoNodejs /> },
		{ skill: 'Express JS', logoScr: <SiExpress /> },
		{ skill: 'Mongo DB', logoScr: <BiLogoMongodb /> },
	]
	const certificationDetails = [
		{
			title: 'CC50: Introdução à Ciência da Computação',
			url: '/pdfs/Calebe-Copello-CS50.pdf',
			subHeading: '',
			description:
				'O curso CS50 é oferecido presencialmente e online pela Universidade de Harvard e, desde 2015, também pela Universidade Yale. O CS50 é uma experiência abrangente de introdução à ciência da computação, destacando-se não apenas por sua popularidade, mas também por proporcionar aos alunos uma base sólida em conceitos fundamentais e práticos da área.',
		},
		{
			title: 'Responsive Web Design',
			url: '/pdfs/Calebe-Copello-responsive-web-design.pdf',
			subHeading: '',
			description:
				'Nesse curso os participantes aprendem as linguagens que os desenvolvedores utilizam para construir páginas da web: HTML (Hypertext Markup Language) para conteúdo e CSS (Cascading Style Sheets) para design. Criando sites responsivos e modernos.',
		},
		{
			title: 'JavaScript Algorithms and Data Structures',
			url: '/pdfs/Calebe-Copello-javascript-algorithms-and-data-structures.pdf',
			subHeading: '',
			description:
				'Enquanto HTML e CSS controlam o conteúdo e o estilo de uma página, o JavaScript é utilizado para torná-la interativa. No Certificado de Algoritmos e Estruturas de Dados em JavaScript, os alunos aprendem os fundamentos da linguagem, incluindo variáveis, arrays, objetos, loops e funções. Após dominar esses conceitos, eles aplicarão esse conhecimento criando algoritmos para manipular strings e calcular fatoriais. Ao longo do curso, também são exploradas duas importantes abordagens de programação: Programação Orientada a Objetos (OOP) e Programação Funcional (FP).',
		},
	]
	const interestsDetails = [
		{
			heading: 'SciFi',
			description: 'Admiro mestres da ficção científica, como Gene Roddenberry, Douglas Adams e George Lucas, com uma predileção pela space opera e um profundo impacto de Star Trek. Integro ficção científica em minha rotina por meio de filmes e séries, explorando mundos imaginativos. A singularidade de conceber como outras espécies geririam sociedades é cativante, proporcionando um escape da tensão da realidade atual.',
		},
		{
			heading: 'Hardware',
			description: 'Tenho uma grande admiração pelo universo do hardware, especialmente em acompanhar inovações e benchmarks. Admirando figuras como Linus Torvalds, encontro fascínio na evolução constante das tecnologias. A experiência prática de construir e manter sistemas computacionais adiciona uma dimensão única à minha rotina, proporcionando uma compreensão prática e emocionante do mundo do hardware.',
		},
		{
			heading: 'Games',
			description: 'Tenho paixão por jogos de automação, souls-like e simulação, sendo Dark Souls e Factorio estão entre meus favoritos. Apesar de não participar de comunidades online, os jogos são minha principal fonte de entretenimento. Gosto tanto de jogos single-player quanto multiplayer, mas tenho uma inclinação especial pelas experiências envolventes dos jogos single-player.',
		},
	]
	const resumeDetails = [
		<div
			className='resume-screen-container'
			key='education'
		>
			<ResumeHeading
				heading={'FURG'}
				subHeading={'Licenciatura em Letras Português/Inglês'}
				fromDate={'2009'}
				toDate={'2015'}
			/>
			<ResumeHeading
				heading={'UFPEL'}
				subHeading={'Mestrado em Linguística'}
				fromDate={'2016'}
				toDate={'2018'}
			/>
			<ResumeHeading
				heading={'UNICESUMAR'}
				subHeading={
					'Superior de Tecnologia em Análise e Desenvolvimento de Sistemas'
				}
				fromDate={'2022'}
				toDate={'presente'}
			/>
		</div>,
		<div
			className='resume-screen-container'
			key='work-experience'
		>
			<ResumeHeading
				heading={'CCAA'}
				subHeading={'Instrutor de Idioma: Inglês'}
				fromDate={'2018'}
				toDate={'2023'}
			/>
			<div className='experience-description'>
				<span className='resume-description-text'>
					Minha experiência como professor não somente consolidou minhas
					habilidades comunicativas, como também aprimorou minha capacidade de
					análisar e adaptar planos previamente realizados. Tive de solucionar
					problemas de forma flexível. A execução de planos de aula e a gestão
					da sala de aula prepararam-me para a lógica e estruturação de
					projetos. Essa base, juntamente com minha paixão pela aprendizagem
					contínua, me impulsiona agora em minha jornada na programação, onde
					busco utilizar essas habilidades contruídas na resolução de novos
					desafios e no Desenvolvimento de soluções criativas.
				</span>
			</div>
		</div>,
		<div
			className='resume-screen-container programming-skills-container'
			key='programming-skills'
		>
			{programmingSkillDetails.map((skill, index) => (
				<div
					className='skill-parent'
					key={index}
				>
					<div className='heading-bullet'></div>
					<div className='skill-wrapper'>
						<span className=''>{skill.skill}</span>
						<div className='skill-logo'>
							<div>{skill.logoScr}</div>
						</div>
					</div>
				</div>
			))}
		</div>,
		<div
			className='resume-screen-container'
			key='certifications'
		>
			{certificationDetails.map((certificationDetails, index) => (
				<div className='resume-certification-container'>
					<ResumeHeading
						key={index}
						heading={
							<>
								{certificationDetails.title}
								<a
									href={certificationDetails.url}
									download={certificationDetails.url}
								>
									<FaRegFilePdf />
								</a>
							</>
						}
						subHeading={certificationDetails.subHeading}
						description={certificationDetails.description}
					/>
				</div>
			))}
		</div>,
		<div
			className='resume-screen-container'
			key='interests'
		>
			{interestsDetails.map((interestsDetails, index) => (
				<ResumeHeading
					key={index}
					heading={interestsDetails.heading}
					description={interestsDetails.description}
				/>
			))}
		</div>,
	]

	const handleCarousal = (index) => {
		let offsetHeight = 360
		let newCarousalOffset = {
			style: { transform: 'translateY(' + index * offsetHeight * -1 + 'px)' },
		}
		setCarousalOffSetStyle(newCarousalOffset)
		setSelectedBulletIndex(index)
	}

	const getBullets = () => {
		return resumeBullets.map((bullet, index) => (
			<div
				onClick={() => handleCarousal(index)}
				className={
					index === selectedBulletIndex ? 'bullet selected-bullet' : 'bullet'
				}
				key={index}
			>
				<div className='bullet-logo'>{bullet.logoScr}</div>
				<span className='bullet-label'>{bullet.label}</span>
			</div>
		))
	}

	const getResumeScreen = () => {
		return (
			<div
				style={carousalOffSetStyle.style}
				className='resume-details-carousal'
			>
				{resumeDetails.map((ResumeDetail) => ResumeDetail)}
			</div>
		)
	}

	return (
		<>
			<div
				className='resume-container screen-container fade-in'
				id={props.id || ''}
			>
				<div className='resume-content'>
					<ScreenHeading
						title={'Currículo'}
						subHeading={'Minhas informações'}
					/>
					<div className='resume-card'>
						<div className='resume-bullets'>
							<div className='bullet-container'>
								<div className='bullet-icons'></div>
								<div className='bullets'>{getBullets()}</div>
							</div>
						</div>
						<div className='resume-bullet-details'>{getResumeScreen()}</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Resume
