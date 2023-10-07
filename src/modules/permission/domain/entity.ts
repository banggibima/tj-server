import Role from "../../role/domain/entity";

interface Permission {
  id: string;
  name?: string | null;
  role_id?: string | null;
  created_at: Date;
  updated_at: Date;
  role?: Role | null;
}

export default Permission;
