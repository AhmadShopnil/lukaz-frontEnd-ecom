
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
        
export default function Provider({ children }) {
  return (
      <div>

         <PrimeReactProvider >
           {children}
        </PrimeReactProvider>
         
      </div>
     
  );
}
