import {EmblaOptionsType} from 'embla-carousel';

import {useFetchData} from '@/app/lib/utils';
import {Restaurant} from '@/app/lib/definitions';

import Loading from '@/app/ui/loading';
import '@/app/ui/components/interactivity/carousel/css/embla.css';
import EmblaCarousel from '@/app/ui/components/interactivity/carousel/carousel';

function RestaurantsListing() {
    const fetchString = "/api/get?collectionName=restaurants&sortKeys=name&sortOrders=asc";
    const [restaurants, error] = useFetchData<Restaurant[]>(fetchString);

    const OPTIONS: EmblaOptionsType = {align: "end", slidesToScroll: "auto", loop: true};

    return (
        <div className="mt-10">
            <h2 className={`font-bold text-3xl mb-7 ${restaurants ? "" : " -ml-[536px]"}`}>
                Restaurants
            </h2>

            {restaurants ?
                <EmblaCarousel slides={restaurants} options={OPTIONS}/>
                :
                <Loading/>
            }
        </div>
    );
}

export default RestaurantsListing;