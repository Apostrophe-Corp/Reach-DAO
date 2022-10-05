import React, { useState, useEffect } from 'react'
import { useReach, fmtClasses } from '../../hooks'
import styles from '../../styles/Preloader.module.css'

const Preloader = () => {
	const { sleep, showPreloader, setProcessing } = useReach()
	const [preloaderClass, setPreloaderClass] = useState(
		fmtClasses(styles.container)
	)

	useEffect(() => {
		setPreloaderClass(styles.container)
	}, [])

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		const fadeOff = () => {
			sleep(3000).then(() => {
				setPreloaderClass(fmtClasses(styles.container, styles.invisible))
				sleep(400).then(() => {
					setPreloaderClass(
						fmtClasses(styles.container, styles.invisible, styles.terminated)
					)
				})
			})
		}
		if (showPreloader === false) {
			console.log('Fading out')
			fadeOff()
			setProcessing(false)
			console.log('Fading should be completed now')
		}
	}, [showPreloader])

	return (
		<div className={preloaderClass}>
			<div className={fmtClasses(styles.circle, styles.c1)}></div>
			<div className={fmtClasses(styles.circle, styles.c2)}></div>
			<div className={fmtClasses(styles.circle, styles.c3)}></div>
		</div>
	)
}

export default Preloader
