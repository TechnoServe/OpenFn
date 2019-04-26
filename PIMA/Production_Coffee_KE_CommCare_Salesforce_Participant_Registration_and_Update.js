//New Households use this section.
beta.each(
  "$.data",
  upsertIf(
    state.data.form.survey_detail == "New Household",
    "Household__c", "Household_ID__c",
      fields(
        field("Household_ID__c", dataValue("form.Household_Id")),
        field("Name", dataValue("form.Household_Number")),
        field("Training_Group__c", dataValue("form.Training_Group_Id")),
        field("Farm_Size__c", dataValue("form.Number_of_Trees"))
      )
    )
  ),

  beta.each(
    "$.data",
    upsertIf(
    state.data.form.survey_detail == "New Household",
    "Training_Group__c", "CommCare_Case_Id__c",
      fields(
        field("Household_Counter__c", dataValue("form.Update_Household_Counter")), 
        field("CommCare_Case_Id__c", dataValue("form.Training_Group_Id"))     
      )
    )
  ),
  
  beta.each(
    "$.data",
    upsertIf(
    state.data.form.survey_detail == "New Household",
    "Participant__c", "CommCare_Case_Id__c",
      fields(
        field("CommCare_Case_Id__c", dataValue("form.subcase_0.case.@case_id")),
        field("TNS_Id__c", dataValue("form.Farmer_Id")),
        field("Age__c", dataValue("form.Age")),
        field("Name", dataValue("form.First_Name")),
        field("Middle_Name__c", dataValue("form.Middle_Name")),
        field("Last_Name__c", dataValue("form.Last_Name")),
        field("Gender__c", dataValue("form.Gender")),
        field("Status__c", dataValue("form.Status")),
        field("Farm_Size__c", dataValue("form.Number_of_Trees")),
        field("Sent_to_OpenFn_Status__c", "Complete"),
        field("Phone_Number__c", dataValue("form.Phone_Number")),
        field("Other_ID_Number__c", dataValue("form.Cooperative_Membership_Number")),
        field("Primary_Household_Member__c", dataValue("form.Primary_Household_Member")),
        relationship("Household__r", "Household_ID__c", dataValue("form.Household_Id")),
        relationship("Training_Group__r", "CommCare_Case_Id__c", dataValue("form.Training_Group_Id"))
      )
    )
  ),

//Existing household use this section.
beta.each(
  "$.data",
  upsertIf(
    state.data.form.survey_detail == "Existing Household",
    "Household__c", "Household_ID__c",
      fields(
        field("Household_ID__c", dataValue("form.Household_Id")),
        field("Farm_Size__c", dataValue("form.Number_of_Trees"))
      )
    )
  ),

  beta.each(
    "$.data",
    upsertIf(
    state.data.form.survey_detail == "Existing Household",
    "Participant__c", "CommCare_Case_Id__c",
      fields(
        field("CommCare_Case_Id__c", dataValue("form.subcase_0.case.@case_id")),
        field("TNS_Id__c", dataValue("form.Farmer_Id")),
        field("Age__c", dataValue("form.Age")),
        field("Name", dataValue("form.First_Name")),
        field("Middle_Name__c", dataValue("form.Middle_Name")),
        field("Last_Name__c", dataValue("form.Last_Name")),
        field("Gender__c", dataValue("form.Gender")),
        field("Status__c", dataValue("form.Status")),
        field("Farm_Size__c", dataValue("form.Number_of_Trees")),
        field("Sent_to_OpenFn_Status__c", "Complete"),
        field("Phone_Number__c", dataValue("form.Phone_Number")),
        field("Other_ID_Number__c", dataValue("form.Cooperative_Membership_Number")),
        field("Primary_Household_Member__c", dataValue("form.Primary_Household_Member")),
        relationship("Household__r", "Household_ID__c", dataValue("form.Household_Id")),
        relationship("Training_Group__r", "CommCare_Case_Id__c", dataValue("form.Training_Group_Id"))
      )
    )
  ),

//Update participants use this section.
beta.each(
  "$.data",
  upsertIf(
    state.data.form.survey_detail == "Participant Update",
    "Household__c", "Household_ID__c",
      fields(
        field("Household_ID__c", dataValue("form.Household_Id")),
        field("Farm_Size__c", dataValue("form.Number_of_Trees"))
      )
    )
  ),

  beta.each(
    "$.data",
    upsertIf(
    state.data.form.survey_detail == "Participant Update",
    "Participant__c", "CommCare_Case_Id__c",
      fields(
        field("CommCare_Case_Id__c", dataValue("form.case.@case_id")),
        field("Age__c", dataValue("form.Age")),
        field("Name", dataValue("form.First_Name")),
        field("Middle_Name__c", dataValue("form.Middle_Name")),
        field("Last_Name__c", dataValue("form.Last_Name")),
        field("Gender__c", dataValue("form.Gender")),
        field("Farm_Size__c", dataValue("form.Number_of_Trees")),
        field("Phone_Number__c", dataValue("form.Phone_Number")),
        field("Other_ID_Number__c", dataValue("form.Cooperative_Membership_Number"))
      )
    )
  );

//Version Control