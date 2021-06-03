import React from 'react';
import './Sect2.css'
// import ps5 from './ps5.jpeg'
// import watch1 from './watch1.jpeg'
// import shoe from './shoe.jpeg'
import watch from './watch.jpeg'
import pad from './pad.jpeg'

const Sect2 = () => {

    const items = [
        {
            id: 1,
            image: <img src={pad} alt=''></img>,
            notes: 'PS5 PlayStation 5 Console Disc Version New Sealed'
        },
        {
            id: 2,
            image: <img src={pad} alt=''></img>,
            notes: 'PS5 PlayStation 5 Console Disc Version New Sealed'
        },
        {
            id: 3,
            image: <img src={watch} alt=''></img>,
            notes: 'PS5 PlayStation 5 Console Disc Version New Sealed'
        },
        {
            id: 4,
            image: <img src={pad} alt=''></img>,
            notes: 'PS5 PlayStation 5 Console Disc Version New Sealed'
        },
        {
            id: 5,
            image: <img src={pad} alt=''></img>,
            notes: 'PS5 PlayStation 5 Console Disc Version New Sealed'
        },
        {
            id: 6,
            image: <img src={watch} alt=''></img>,
            notes: 'PS5 PlayStation 5 Console Disc Version New Sealed'
        },
        {
            id: 6,
            image: <img src={pad} alt=''></img>,
            notes: 'PS5 PlayStation 5 Console Disc Version New Sealed'
        },
        {
            id: 6,
            image: <img src={watch} alt=''></img>,
            notes: 'PS5 PlayStation 5 Console Disc Version New Sealed'
        },
    ]

    return (
        <div className='item--wrapper'>
            {items.map(item => (
                <div className='items' key={item.id}>
                    <h4>{item.image}</h4>
                    <p>{item.notes}</p>
                </div>
            )
            )}
        </div>
    )
}

export default Sect2




  

//   return (
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           alt="Contemplative Reptile"
//           height="140"
//           image="/static/images/cards/contemplative-reptile.jpg"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <h6></h6>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }
