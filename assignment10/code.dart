class User {
  String? userId;
  String? jobTitleName;
  String? firstName;
  String? lastName;
  String? preferredFullName;
  String? employeeCode;
  String? region;
  String? phoneNumber;
  String? emailAddress;

  User(
      {this.userId,
      this.jobTitleName,
      this.firstName,
      this.lastName,
      this.preferredFullName,
      this.employeeCode,
      this.region,
      this.phoneNumber,
      this.emailAddress});

  User.fromJson(Map<String, dynamic> json) {
    userId = json['UserId'];
    jobTitleName = json['jobTitleName'];
    firstName = json['firstName'];
    lastName = json['lastName'];
    preferredFullName = json['preferredFullName'];
    employeeCode = json['employeeCode'];
    region = json['region'];
    phoneNumber = json['phoneNumber'];
    emailAddress = json['emailAddress'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['userId'] = this.userId;
    data['jobTitleName'] = this.jobTitleName;
    data['firstName'] = this.firstName;
    data['lastName'] = this.lastName;
    data['preferredFullName'] = this.preferredFullName;
    data['employeeCode'] = this.employeeCode;
    data['region'] = this.region;
    data['phoneNumber'] = this.phoneNumber;
    data['emailAddress'] = this.emailAddress;
    return data;
  }
}

void main() {
  Map<String, dynamic> user = {
    "userId": "rirani",
    "jobTitleName": "Developer",
    "firstName": "Romin",
    "lastName": "Irani",
    "preferredFullName": "Romin Irani",
    "employeeCode": "E1",
    "region": "CA",
    "phoneNumber": "408-1234567",
    "emailAddress": "romin.k.irani@gmail.com"
  };

  print("Hello, World!");

  User a = User.fromJson(user);
  print(a.firstName);
  print(a.jobTitleName);
  print(a.firstName);
  print(a.lastName);
  print(a.preferredFullName);
  print(a.employeeCode);
  print(a.region);
  print(a.phoneNumber);
  print(a.emailAddress);

  Map<String, dynamic> ans = a.toJson();
  print(ans);
}
