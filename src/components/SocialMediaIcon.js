function SocialMediaIcon(props) {
    return (
        <a href={props.link}>
            <div className='c-socialMediaIcon' style={{ backgroundColor: props.backgroundColor }}>
                <img className='c-socialMediaIcon__icon' src={props.icon} alt='Social Media Icon' />
            </div>
        </a>
    );
}

export default SocialMediaIcon;