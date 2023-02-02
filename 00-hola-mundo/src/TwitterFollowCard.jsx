import { useState } from 'react' //hooks

export function TwiterFollowCard ({children, userName}){

    const [isFollowing,setIsFollowing] = useState(false)
 
//ternaria. es como un if pero mas corto y funcional=
   const text = isFollowing ? 'Siguiendo' : 'Seguir'
   const buttonClassName = isFollowing 
   ? 'tw-followCard-button is-following'
   : 'tw-followCard-button'

   const handleClick = () =>{
    setIsFollowing(!isFollowing)
   }

    const imageSrc = `https://unavatar.io/${userName}`
    return(
        <article className ='tw-followCard'>
        <header className ='tw-followCard-header'>
            <img
                className ='tw-followCard-avatar'
                alt="el avatar" 
                src={`https://unavatar.io/${userName}`}   />
            
            <div className ='tw-followCard-info'>
                <strong>{children}</strong>
                <span className ='tw-followCard-infoUserName'> @{userName}</span>
            </div>
        </header>

        <aside>
            <button className ={buttonClassName} onClick={handleClick}>
                {text} 
            </button>
        </aside>
     </article>

    )
}

//dif entre componente y elemento = componente es una factoria de ekementos.
//react renderiza elemntos.
//childrens
//valor  defecto se lo paso x parameytro =""}

//const props = {isFolllow= true, username: 'pepe'}
// <componente{..props} > pasa todas las props del objeto como props al componente.. igual es mala ´racrica


//ESTADO=  ej: interuptor de luz.Si esta prendida la apago, si esta apagada la prendo

//renderizado condicional
//valor, actrualizar estado