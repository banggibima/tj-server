import User from "../../user/domain/entity";

interface Profile {
  id: string;
  first_name?: string | null;
  last_name?: string | null;
  created_at: Date;
  updated_at: Date;
  user?: User[] | null;
}

export default Profile;
