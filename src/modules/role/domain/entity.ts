import Permission from "../../permission/domain/entity";
import User from "../../user/domain/entity";

interface Role {
  id: string;
  name?: string | null;
  created_at: Date;
  updated_at: Date;
  permission?: Permission[] | null;
  user?: User[] | null;
}

export default Role;
