import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import ReservationsClient from "./ReservationsClient";

type Props = {}

const ReservationsPage = async (props: Props) => {
  const currentUser = await getCurrentUser();
  if(!currentUser) {
    return (
        <EmptyState 
        title='Unauthorized'
        subtitle="Please, Log in to continue"
        />
    )
  }

  const reservations = await getReservations({
    authorId: currentUser.id
  });

  if(reservations.length === 0) {
    return (
        <EmptyState 
        title="No reservations found for your listing"
        subtitle="Seems to me, your place doesn't look attractive at all."
        />
    );
  }

  return (
    <div>
        <ReservationsClient 
        reservations={reservations}
        currentUser={currentUser}
        />
    </div>
  )
}

export default ReservationsPage;


