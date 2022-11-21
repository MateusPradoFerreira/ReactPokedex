function Stats(props) {
    return (
        <div className='c-stats__stat' >
            <h6>{props.nameStat}</h6>
            <p>{props.base_stat}</p>
            <div className='c-stats__bar'>
                <div style={{ width: props.base_stat + 'px' }}></div>
            </div>
        </div>
    );
}

export default Stats;