Class SeatBook
{
    Transaction transaction_obj;
    bool seats[total_seats];
    String place;
    String ticketType;
 
    bool check_availability();
 
    int  position_of_seat()
    {
        return seat_pos_in_theater;
    }
 
    void multiple tickets();
 
    void final_booking()
    {
        place = positon_of_seat();
        if (single_ticket)
            continue;
        else
            mutliple_ticket_booking();
 
        Transaction_obj.pay(ticketType, seats_booked, place);
    }
}