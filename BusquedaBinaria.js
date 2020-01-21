function BusquedaBinaria(root, nodoIzq, nodoDer){
    if (root !== null){
        if (root <= nodoIzq || root >= nodoDer){
            return false;
        }
        else{
            return nodoIzq.BusquedaBinaria()
        }
    }
    else{
        return true;
    }
}
