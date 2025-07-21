
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import imagen1 from './assets/imagenes/imagen1.jpg'

export default function AdvancedDemo() {
    const header = (
        <img alt="Card"
         src={imagen1}
         style={{ width: '1200px', height: '780px', objectFit: 'cover'}} />
    );
    const footer = (
        <>
            <Button label="Like"
             icon="pi pi-check"
              style={{backgroundColor: '#007ad9', color: 'white'}}/>
            <Button
             label="Dislike"
               icon="pi pi-times" 
               style={{ marginLeft: '0.5em', backgroundColor: '#1d5f14ff', color: 'white'}}/> 
        </>
    );

    return (
        <div className="card flex justify-content-center">
            <Card title="John App"
             subTitle="John Arroyave"
              footer={footer}
               header={header}
                className="md:w-25rem">
                <p className="m-0">
                    Aprender de nuestros errores es lo que nos hace grandes, vivir bajo el constante
                    miedo de cometer un error es el error mas grande que se puede cometer.
                </p>
            </Card>
        </div>
    )
}
        