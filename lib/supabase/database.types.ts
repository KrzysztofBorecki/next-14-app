export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      services_items: {
        Row: {
          created_at: string
          currency: string
          description: string
          employee: string | null
          id: string
          material: string | null
          price: number
          service_type: string
          title: string
        }
        Insert: {
          created_at?: string
          currency: string
          description: string
          employee?: string | null
          id?: string
          material?: string | null
          price: number
          service_type: string
          title: string
        }
        Update: {
          created_at?: string
          currency?: string
          description?: string
          employee?: string | null
          id?: string
          material?: string | null
          price?: number
          service_type?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "services_items_employee_fkey"
            columns: ["employee"]
            isOneToOne: false
            referencedRelation: "team"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "services_items_service_type_fkey"
            columns: ["service_type"]
            isOneToOne: false
            referencedRelation: "services_types"
            referencedColumns: ["id"]
          }
        ]
      }
      services_types: {
        Row: {
          created_at: string
          description: string[]
          id: string
          title: string
        }
        Insert: {
          created_at?: string
          description: string[]
          id?: string
          title: string
        }
        Update: {
          created_at?: string
          description?: string[]
          id?: string
          title?: string
        }
        Relationships: []
      }
      team: {
        Row: {
          avatar: string
          biography: string[]
          created_at: string
          degree: string
          description: string[]
          id: string
          name: string
          specialization: string
          surname: string
        }
        Insert: {
          avatar: string
          biography: string[]
          created_at?: string
          degree: string
          description: string[]
          id?: string
          name: string
          specialization: string
          surname: string
        }
        Update: {
          avatar?: string
          biography?: string[]
          created_at?: string
          degree?: string
          description?: string[]
          id?: string
          name?: string
          specialization?: string
          surname?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never

