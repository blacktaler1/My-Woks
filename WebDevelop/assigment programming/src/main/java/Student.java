public class Student {
    private Integer id ;
    private Integer UserID;
    private  String name;
    private String Surname;
    private String GroupName;
    private Integer Ball;


    public Student(Integer id, Integer userID, String name, String surname, String groupName, Integer ball) {
        this.id = id;
        UserID = userID;
        this.name = name;
        Surname = surname;
        GroupName = groupName;
        Ball = ball;
    }

    public Student() {
    }

    public Integer getUserID() {
        return UserID;
    }

    public void setUserID(Integer userID) {
        UserID = userID;
    }
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return Surname;
    }

    public void setSurname(String surname) {
        Surname = surname;
    }

    public String getGroupName() {
        return GroupName;
    }

    public void setGroupName(String groupName) {
        GroupName = groupName;
    }

    public Integer getBall() {
        return Ball;
    }

    public void setBall(Integer ball) {
        Ball = ball;
    }



    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", UserID=" + UserID +
                ", name='" + name + '\'' +
                ", Surname='" + Surname + '\'' +
                ", GroupName='" + GroupName + '\'' +
                ", Ball=" + Ball +
                '}';
    }
}
