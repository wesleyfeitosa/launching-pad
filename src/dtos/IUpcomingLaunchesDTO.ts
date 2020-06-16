export default interface UpcomingLaunchesDTO {
  flight_number: number;
  mission_name: string;
  launch_date_utc: string;
  rocket: {
    rocket_name: string;
  };
  links: {
    mission_patch_small: string;
  };
}
