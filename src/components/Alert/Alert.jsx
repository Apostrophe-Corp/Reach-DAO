import React, { useState, useEffect } from 'react'
import { useReach, fmtClasses } from '../../hooks'
import styles from '../../styles/Alert.module.css'
import style from '../../styles/Preloader.module.css'

const Alert = () => {
	const { message, setMessage, showAlert, hideAlert, sleep } = useReach()
	const [alertClass, setAlertClass] = useState(
		fmtClasses(styles.alertContainer, style.invisible)
	)
	const [active, setActive] = useState(showAlert)

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		const close = async () => {
			const fadeOff = async () => {
				setAlertClass(fmtClasses(styles.alertContainer, style.invisible))
				await sleep(400)
				setAlertClass(
					fmtClasses(styles.alertContainer, style.invisible, style.terminated)
				)
			}
			if (showAlert === false) {
				await fadeOff()
				setActive(false)
				setMessage((lastState) => '')
			}
			if (showAlert === true) {
				setActive(true)
				setAlertClass(fmtClasses(styles.alertContainer, style.invisible))
				await sleep(100)
				setAlertClass(fmtClasses(styles.alertContainer))
			}
		}
		close()
	}, [showAlert, sleep, setMessage])

	return (
		<>
			{active && (
				<div className={alertClass}>
					<div
						className={fmtClasses(styles.mask)}
						onClick={hideAlert}
					></div>
					<div className={fmtClasses(styles.alert)}>
						<div
							className={fmtClasses(styles.cancel)}
							onClick={hideAlert}
						></div>
						<span className={fmtClasses(styles.message)}>{message}</span>
					</div>
				</div>
			)}
		</>
	)
}

export default Alert
