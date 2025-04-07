export interface Bio {
  id?: string;
  experienceId?: string;
  projectId?: string;
  userId?: string;
  updatedAt?: string;
  createdAt?: string;
  language?: string;
  public?: boolean;
  title: string;
  owner: {
    firstName: string;
    lastName: string;
  };
  presentation: string[];
  professionalPosition?: {
    availability: string;
    professionalStatus: string;
  };
  contacts?: {
    mail: string;
    tel: string;
  };
  userInformation?: {
    city: string;
    region: string;
    haveDrivingLicence: boolean;
    countryId: number;
  };
  languageSkills?: {
    elements: {
      language: string;
      details: string;
    }[];
  };
  skills?: {
    description: string;
    children: {
      description: string;
    }[];
  }[];
}
