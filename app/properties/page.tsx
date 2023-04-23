import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import TripsClient from "./PropertiesClient";
import getListings from "../actions/getListings";
import PropertiesClient from "./PropertiesClient";

type Props = {};

const PropertiesPage = async (props: Props) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <EmptyState title="Anauthorized" subtitle="Please, Log in to continue" />
    );
  }

  const listings = await getListings({ userId: currentUser.id });

  if(listings.length === 0) {
    return (
        <EmptyState title="No properties found" subtitle="You haven't added any properties yet" />
      );
  }

  return(
     <div>
        <PropertiesClient 
        listings={listings}
        currentUser={currentUser}
        />
     </div>
     );
};

export default PropertiesPage;
