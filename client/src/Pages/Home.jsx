import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  SwiperCore.use([Navigation]);


  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("api/v1/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch("api/v1/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("api/v1/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferListings();
  }, []);

  return (
    <div>
      {/* top */}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="lg:text-6xl font-bold text-slate-700 text-3xl ">
          Find your next <span className="text-slate-500">perfect</span>
          <br />
          place with ease
        </h1>

        <div className="text-gray-400 text-xs sm:text-sm">
          Sahand Estate is the best place to find your next perfect home to live
          <br />
          we have a wide range of properties for you to choose from.
        </div>
        <Link
          className="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
          to={"/search"}
        >
          Let's get started
        </Link>
      </div>
      {/* swiper */}
<Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="h-[500px]"
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>
    

      {/* listing result for offer, sale and rent */}
      <div className="max-w-6xl mx-auto p-4 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <h2 className="text-3xl text-slate-700 font-semibold">
                Recent Offers
              </h2>
              <Link
                to={"/search?offer=true"}
                className="text-blue-700 hover:underline"
              >
                Show more offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {rentListings && rentListings.length > 0 && (
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <h2 className="text-3xl text-slate-700 font-semibold">
                Recent places for rent
              </h2>
              <Link
                to={"/search?type=rent"}
                className="text-blue-700 hover:underline"
              >
                Show more places for rent
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {saleListings && saleListings.length > 0 && (
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <h2 className="text-3xl text-slate-700 font-semibold">
                Recent places for sale
              </h2>
              <Link
                to={"/search?type=sale"}
                className="text-blue-700 hover:underline"
              >
                Show more places for sale
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
