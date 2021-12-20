import Image from 'next/image'
import styles from './Loader.module.css'

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Image 
      className={ styles.spin }
      src="/assets/images/loader.png"
      alt="loader" 
      width={95}
      height={100}
      />
    </div>
  )
}

export default Loader