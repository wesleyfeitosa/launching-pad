import api from './api';

import LaunchDTO from '../dtos/LaunchDTO';

interface IUpcomingIdLaunches {
  params: {
    id: string;
  };
}

export async function getUpcomingIdLaunches(): Promise<IUpcomingIdLaunches[]> {
  const response = await api.get<LaunchDTO[]>('launches/upcoming');

  const launchData = response.data;

  return launchData.map((launch) => {
    return {
      params: {
        id: String(launch.flight_number),
      },
    };
  });
}

export async function getLaunchData(id: string | string[]): Promise<LaunchDTO> {
  const response = await api.get<LaunchDTO>(`launches/${id}`);

  const launchSelected = response.data;

  return launchSelected;
}
