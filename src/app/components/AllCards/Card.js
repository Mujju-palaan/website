import styles from '@/app/components/AllCards/Card.module.css'

const Card = (props) => {
  return (
    <>
    <div className={styles.main}>
        <div className={styles.card}>
            {/* <Image src='/nutritionist.png'></Image> */}
            <img className={styles.imgs} style={{objectFit: 'cover', margin:'1rem'}}
                 src={props.Images} height={220} width={320}></img>
            <div className={styles.card_content}>
                <h2 style={{fontSize:'2rem', textAlign:'center'}}>{props.title}</h2>
                <p>{props.content}
                </p>
            </div>
            
        </div>
        {/* <div>
            <title>
                <h2>Our Health Mission</h2>
            </title>
        </div>
        <div>
            <p>Our experienced medical professionals put your healing needs first. We are proud to 
                provide a high-quality level of customer service, medical experience, and commitment to 
                health and wellness to all our patients. Our goal is to make you feel better as quickly as possible.
            </p>
        </div> */}
    </div>
    </>
  )
}

export default Card

