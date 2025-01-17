import { useState } from "react";
import { useDispatch } from "react-redux";
import { orderName } from "../../Redux/actions/actions";

const FilterBar = () => {
    const dispatch = useDispatch();
    const [orden, setOrden] = useState('');

    const handlerNameOrder = (e) => {
        dispatch(orderName(e.target.value));
        setOrden(`Ordenado ${e.target.value}`);
    }


    return(
        <div class="btn-group ">
            <select class="btn btn-secondary" onChange={handlerNameOrder}>
                <option value="base" hidden={true}>Display options</option>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
            </select>
        </div>
    )
}

export default FilterBar;