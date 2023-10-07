import Profile from "../../profile/domain/entity";
import Role from "../../role/domain/entity";

interface User {
  id: string;
  email?: string | null;
  phone?: string | null;
  username: string;
  password: string;
  profile_id?: string | null;
  role_id?: string | null;
  created_at: Date;
  updated_at: Date;
  profile?: Profile | null;
  role?: Role | null;
}

export default User;
