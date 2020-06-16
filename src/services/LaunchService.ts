import api from './api';

import UpcomingLaunchesDTO from '../dtos/IUpcomingLaunchesDTO';

interface IUpcomingIdLaunches {
  params: {
    id: string;
  };
}

export async function getUpcomingIdLaunches(): Promise<IUpcomingIdLaunches[]> {
  const response = await api.get<UpcomingLaunchesDTO[]>('launches/upcoming');

  const upcomingLaunches = response.data;

  return upcomingLaunches.map((launch) => {
    return {
      params: {
        id: String(launch.flight_number),
      },
    };
  });
}

export async function getLaunchData(
  id: string | string[]
): Promise<UpcomingLaunchesDTO> {
  const response = await api.get(`launches/${id}`);

  const launchSelected = response.data;

  return launchSelected;
}
