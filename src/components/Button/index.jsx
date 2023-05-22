function Button(){

    function handleClick(){
        alert('Halo')
    }

    return <button style={{backgroundColor: 'green'}} onClick={handleClick}>Klik</button>
}

export default Button;