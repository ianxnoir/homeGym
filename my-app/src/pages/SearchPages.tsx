import { useDispatch, useSelector } from 'react-redux';
import { PtBox } from '../component/PtBox'
import useReactRouter from 'use-react-router';
import { RootState } from "../store";
import { useEffect } from 'react';
import { fetchSearch } from '../redux/ptCards/actions'
export function SearchPages() {

    const cards = useSelector((state: RootState) => state.cardReducer.result)
    const { match: { params: { searchTerm } } } = useReactRouter<{ searchTerm: string }>();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSearch(searchTerm))
    }, [searchTerm,dispatch])

    return (
        <div>
            <div className="paddingDown"> 
            <div className="highlight2"> Search results</div>
            {cards != null ? cards.map((card, i) =>
                <PtBox
                    displayname={card.displayname}
                    categories={card.categories}
                    avgScore={card.avgScore}
                    ratingNo={card.ratingNo}
                    intro={card.intro}
                    photo={card.photo}
                    video={card.video}
                    referId={card.id}
                    key={i}
                />

            ) : <div>No Result</div>}

</div>

        </div>
    )
}

