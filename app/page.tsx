import { Inter } from "next/font/google";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import getListings, { IListingsParams } from "./actions/getListings";
import ListingCard from "./components/listings/ListingCard";
import getCurrentUser from "./actions/getCurrentUser";
import { safeListing } from "./types";

const inter = Inter({ subsets: ["latin"] });

interface HomeProps {
  searchParams: IListingsParams,
};

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();
  const isEmpty = listings.length === 0;

  if (isEmpty) {
    return <EmptyState showReset />;
  }

  return (
    <>
      <Container>
      <div 
          className="
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-2 
            lg:grid-cols-3
            xl:grid-cols-3
            2xl:grid-cols-4
            gap-16
          "
        >
          {listings.map((listing: safeListing) => (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing} 
              actionId={""}           
              />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Home;
