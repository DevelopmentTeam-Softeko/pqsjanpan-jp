export interface Product {
  ID: number
  vehicle_status_id: number
  reference_no: number
  product_name: string
  fk_makers_id: number
  maker_name: any
  fk_model_id: number
  model_name: any
  chassis_no: string
  chassis_code: string
  auction_grade_fk: number
  grade_name: any
  exterior_grade_fk: number
  interior_grade_fk: number
  fk_vehicle_body_type_id: number
  vehicle_body_type_name: any
  fk_vehicle_sub_body_type_id: number
  verification_status_id_fk: number
  length_size: number
  weidth_size: number
  height_size: number
  engine_cc_fk: number
  engine_cc_name: any
  milage: string
  fk_steering_id: number
  steering_name: string
  fk_exterior_color_id: number
  exterior_color_name: any
  interior_color_name: any
  fk_fuel_id: number
  fuel_name: any
  fk_transmission_id: number
  transmission_name: any
  total_door: number
  total_seat: number
  country_origin_id_fk: number
  purchase_date: string
  features_id_fk: number
  purchase_by_id_fk: number
  stock_entry_by_id_fk: number
  stock_checked_by_id_fk: number
  notice_private_info: string
  notice_public_info: string
  web_publish_status_name: any
  created: string
  updated: string
  created_by: number
  updated_by: number
  removed: number
  others: string
  registraion_year: string
  registration_month: string
  manufacturing_year: string
  manufacturing_month: string
  product_images_fk: number
  product_documents_fk: number
  product_type_id: number
  product_type_name: any
  product_package_name: string
  product_cap_link: string
  sunroof: string
  drivetrain_id_fk: number
  drivetrain_name: string
  condition_used_or_new: string
  bf_ref_no: string
  bf_jp_full_price: number
  bf_bd_full_price: number
  fob_price: number
  freight: number
  dhl_no: string
  bid_no: string
  departure_date: string
  arrival_date: string
  departure_from: string
  arrival_to: string
  key_sd_feature: string
  additional_features_status: string
  others1: string
  shipping_mark_status_id: number
  auction_house: string
  auction_date: string
  auction_price: number
  status_name: any
  engine_no: string
  invoice_no: string
  customer_id_fk: number
  sales_rep_id_fk: number
  audit_id_fk: number
  payment_by_id_fk: number
  departure_from_country_fk: number
  departure_from_port_fk: number
  arrival_from_country_fk: number
  arrival_from_port_fk: number
  inventory_loc_country_fk: number
  inventory_loc_port_fk: number
  lot_no: string
  profile_pic_url: string
  vessel_name: string
  vessel_url: string
  audit_date: string
  photo_receive_date: string
  yard_arrival_date: string
  reserve_date: string
  document_receive_date: string
  pi_date: string
  lc_date: string
  etd_date: string
  eta_date: string
  tt_receive_date: string
  payment_receive_date: string
  booking_reg_date: string
  shipment_date: string
  dhl_doc_sent_date: string
  bl_sent_date: string
  exp_cet_receive_date: string
  repair_request_date: string
  repair_fixed_date: string
  shipping_mark_req_date: string
  inspection_date: string
  re_inspection_date: string
  vessel_loading_date: string
  bl_proff_date: string
  lc_payment_receive_date: string
  shipping_mark_done_date: string
  booking_request_date: string
  booking_agent_confirm_date: string
  shipping_agent_id_fk: number
  shipping_agent_name: any
  lc_no: string
  Lc_no: string
  gross_weight: number
  loading_capacity: number
  owner_company_id_fk: number
  publish_company_id_fk: number
  inspection_result_id_fk: number
  inspection_result: any
  re_inspection_result_id_fk: number
  re_inspection_result: any
  repair_result_id_fk: number
  repair_result: any
  repair_type: any
  booking_agent_name: any
  booking_agent_id_fk: number
  repair_type_id_fk: number
  repair_memo: string
  owner_company_name: string
  publish_company_name: any
  total_gross_weight: number
  web_publish_section_id: number
  interior_grade_id_fk: number
  stock_place_id: number
  engine_code: string
  notice_profile_title: string
  sales_note: string
  booking_note: string
  shipping_note: string
  web_social_link: string
  stock_location_country_name: string
  stock_location_port_name: string
  publish_area_name: string
  yard_name_english: string
  yard_name_japanese: string
  auction_house_name: string
  purchase_by_name: string
  sales_rep_name: string
  bid_price_est: number
  bid_price_actual: number
  vehicle_sub_body_type_name: any
  etd_eta_id: number
  etd_eta_days: number
  due_date: string
  fk_sales_agency_id: number
  sales_agency_name: any
  fk_sales_agent_id: number
  sales_agent_name: any
  transport_agent_id_fk: number
  transport_agent_name: any
  order_date: string
  transport_agent_etd_date: string
  transport_agent_eta_date: string
  account_holder_id_fk: number
  account_holder_name: any
  bidding_portal_id_fk: number
  bidding_portal_name: any
  attachment_type_id: number
  eceng_attachment_type_id: number
  bl_attachment_type_id: number
  is_shaken_list: boolean
  is_auction_sheet_private: boolean
  is_auction_sheet_public: boolean
  is_export_certificate_japanese: boolean
  is_export_certificate_english: boolean
  is_shipping_instruction: boolean
  is_inspection_certificate: boolean
  is_bl_list: boolean
  is_bl_surrender: boolean
  is_export_declaration: boolean
  inspection_need_id_fk: number
  inspection_type_id_fk: number
  from_created_date: string
  to_created_date: string
  dhl_document_staus_id: number
  engine_number_updated_date: string
  shipping_agent_email: any
  shipping_agent_cc_email: any
  booking_request_id: number
  amendment_request_id: number
  is_consignee_notify_dhl: boolean
  stock_day_count: number
  country_id_fk: number
  publish_currency_type_id_fk: number
  publish_currency_type_name: any
  maker_exp_code: number
  dhl_status_id: number
  maker: Maker
  model: Model
  bodytype: Bodytype
  colors: Colors
  interiorcolors: any
  enginesize: Enginesize
  grades: Grades
  fuels: Fuels
  transmissions: Transmissions
  vehiclestatus: VehicleStatus
  publishstatustype: PublishStatusType
  country: Country
  fromcountry: any
  fromport: any
  tocountry: any
  toport: any
  port: Port
  importer: Importer
  attachmentObj: Array<AttachmentObj>
  attachment: AttachmentObj
  attachmentListObj: any
  featureObj: FeatureObj[]
  featureObjList: FeatureObjList[]
  costingObj: any
  auditLogs: any
  orderObj: any
  arrivalPortObj: any
  attachmentUploadStatus: any
  exportCertificate: any
  Lc_no1: string
  Lc_no2: string
  Lc_no3: string
  engine_cc: number
}

export interface Maker {
  makers_name: string
  maker_exp_code: number
  create_date: string
  update_date: string
  created_by: string
  updated_by: string
  is_removed: number
  ID: number
}

export interface Model {
  model_name: string
  fk_makers_id: number
  create_date: string
  update_date: string
  created_by: string
  updated_by: string
  is_removed: number
  ID: number
}

export interface Bodytype {
  ID: number
  bodytype_name: string
  img_url: string
  comments: string
  create_date: string
  update_date: string
  created_by: string
  updated_by: string
  is_removed: number
}

export interface Colors {
  ID: number
  color_name: string
  color_code: string
  create_date: string
  update_date: string
  created_by: string
  updated_by: string
  is_removed: number
}

export interface Enginesize {
  ID: number
  cc_name: string
  create_date: string
  update_date: string
  created_by: string
  updated_by: string
  is_removed: number
}

export interface Grades {
  grade_name: string
  grade_description: string
  created: string
  updated: string
  create_by: number
  update_by: number
  removed: number
  ID: number
}

export interface Fuels {
  fuel_name: string
  create_date: string
  update_date: string
  created_by: string
  updated_by: string
  is_removed: number
  ID: number
}

export interface Transmissions {
  transmission_name: string
  create_date: string
  update_date: string
  created_by: string
  updated_by: string
  is_removed: number
  ID: number
}

export interface VehicleStatus {
  ID: number
  name: string
  create_date: string
  update_date: string
  created_by: number
  updated_by: number
  is_removed: number
}

export interface PublishStatusType {
  ID: number
  publish_name: string
  create_date: string
  update_date: string
  created_by: number
  updated_by: number
  is_removed: number
}

export interface Country {
  ID: number
  name: string
  create_date: string
  update_date: string
  created_by: string
  updated_by: string
  is_removed: number
  short_name: string
  currency_name: string
  currency_short_name: string
}

export interface Port {
  ID: number
  fk_country_id: number
  name: string
  create_date: string
  update_date: string
  created_by: string
  updated_by: string
  is_removed: number
}

export interface Importer {
  name: string
  key_person: string
  contact_number_1: string
  contact_number_2: string
  email: string
  present_address: any
  permanent_address: any
  gender: any
  customer_type_fk_id: number
  login_name: any
  login_password: any
  profile_pic_url_fk_id: any
  preffered_contact_time: any
  prefferd_communicaiton_details: any
  remarks: any
  website: any
  customer_color: any
  city_name: any
  zone_id: any
  bank_acc_details_1: any
  bank_acc_details_2: any
  country_id_fk: number
  pref_port_id_fk: number
  sales_rep_id_fk: number
  quotation_type_id_fk: any
  inspection_type_id_fk: any
  provience_state: any
  postal_code: any
  login_id: any
  country_name: any
  port_name: any
  city_id: number
  status: number
  created_by_user: number
  creator_name: any
  sales_rep_name: any
  yes_no_status_name: any
  user_name: any
  zone_name: any
  customer_type_name: any
  quotation_type_name: any
  curbalance: any
  country: any
  port: any
  customertype: any
  user: any
  auditLogs: any
  create_date: string
  update_date: string
  created_by: number
  updated_by: number
  id: number
  is_removed: number
}

export interface FeatureObj {
  features_name: string
  type: number
  create_date: string
  update_date: string
  created_by: string
  updated_by: string
  is_removed: number
  ID: number
}

export interface FeatureObjList {
  id: number
  vehicle_id_fk: number
  feature_id_fk: number
  comments: string
  status: number
  created_by: number
  updated_by: number
  created: string
  updated: string
  is_removed: number
}

export interface AttachmentObj {
  product_id_fk: number
  invoice_id_fk: number
  product_type_id: number
  attachment_type_id: number
  file_name: string
  file_url: string
  file_type: string
  file_size: string
  status: number
  others: string
  is_private_images: boolean
  updated_by_name: any
  created_by: number
  updated_by: number
  create_date: string
  update_date: string
  id: number
  is_removed: number
}
