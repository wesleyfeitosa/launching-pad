export default interface LaunchDTO {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  launch_date_utc: string;
  is_tentative: boolean;
  tentative_max_precision: string;
  rocket: {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    first_stage: {
      cores: [
        {
          core_serial: string;
          flight: number;
          block: number;
          gridfins: boolean;
          legs: boolean;
          reused: boolean;
          land_success: boolean;
          landing_intent: boolean;
          landing_type: string;
          landing_vehicle: string;
        }
      ];
    };
    second_stage: {
      block: number;
      payloads: [
        {
          payload_id: string;
          reused: boolean;
          customers: [string];
          nationality: string;
          manufacturer: string;
          payload_type: string;
          payload_mass_kg: number;
          orbit: string;
          orbit_params: {
            reference_system: string;
            regime: string;
          };
        }
      ];
    };
    fairings: {
      reused: boolean;
      recovery_attempt: boolean;
      recovered: boolean;
      ship: string;
    };
  };
  ships: [string];
  launch_site: {
    site_id: string;
    site_name: string;
    site_name_long: string;
  };
  launch_success: boolean;
  links: {
    mission_patch: string;
    mission_patch_small: string;
    article_link: string;
    video_link: string;
    flickr_images: [string];
  };
  details: string;
  upcoming: boolean;
  crew: boolean;
  last_date_update: string;
}
