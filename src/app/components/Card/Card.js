import styles from '@/app/components/Card/Card.module.css'

const Card = () => {
  return (
    <>
    <div className={styles.main}>
        <div className={styles.card}>
            {/* <Image src='/nutritionist.png'></Image> */}
            <img style={{objectFit: 'fit', margin:'1rem', borderRadius:'4px'}}
                 src='/img1.jpg' height={300} width={340}></img>
            <div className={styles.card_content}>
                <h2 style={{fontSize:'2rem'}}>Our Health Mission</h2>
                <p>Our experienced medical professionals put your healing needs first. We are proud to 
                    provide a high-quality level of customer service, medical experience, and commitment to 
                    health and wellness to all our patients. Our goal is to make you feel better as quickly as possible.
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

