import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;

public class CRUDStudent {
    public static Scanner scanner = new Scanner(System.in);
    public static Student student = new Student();
    List<Student> studentList = new LinkedList<>();

    public void start() {
        addStudents();

        while (true) {
            MENYU();
            int num = scanner.nextInt();
            switch (num) {
                case 1:
                    creataStudent();
                    break;
                case 2:
                    getById();
                    break;
                case 3:
                    deleteStudent();
                    break;
                case 4:
                    update();
                    break;
                case 5:
                    allStudent();
                    break;
                default:
                    throw new IllegalStateException("Unexpected value: " + num);
            }

        }
    }

    private void MENYU() {
        System.out.println("MENU");
        System.out.println("1:Create Student");
        System.out.println("2:gatByIDStudent");
        System.out.println("3:DeleteStudent");
        System.out.println("4:Update");
        System.out.println("5:AllStudent");
        System.out.print("enter nomber:");
    }

    private void allStudent() {
        studentList.forEach(System.out::println);
    }

    private void deleteStudent() {
        System.out.print("Studentid");
        int id = scanner.nextInt();
        for (Student b : studentList) {
            if (b.getUserID().equals(id)) {
                studentList.remove(b);
            }
        }
        System.out.println("Student ocirildi");
    }

    private void getById() {
        System.out.println("Studentid");
        int id = scanner.nextInt();
        for (Student b : studentList) {
            if (b.getId().equals(id)) {
                System.out.println(b);
            }
        }

    }

    private void update() {
        System.out.println("Student_Id:");
        int id = scanner.nextInt();
        for (Student s : studentList) {
            if (s.getUserID().equals(id)) {
                System.out.print("enter new name:");
                s.setName(scanner.next());
                System.out.println("enter new surname:");
                s.setSurname(scanner.next());
                System.out.println("user name va surname ozgartirildi");
            }

        }
    }

    private void creataStudent() {
        System.out.print("id:");
        Integer id = scanner.nextInt();
        System.out.println("UserID");
        Integer userID = scanner.nextInt();
        System.out.print("name:");
        String name = scanner.next();
        System.out.print("surname:");
        String surname = scanner.next();
        System.out.print("GroupName:");
        String groupName = scanner.next();
        System.out.print("Ball:");
        Integer ball = scanner.nextInt();
        addStudent(id, userID, name, surname, groupName, ball);

    }


    private void addStudent(Integer id, Integer userID, String name, String surname, String groupName, Integer ball) {
        Student student1 = new Student();
        student1.setId(id);
        student1.setUserID(userID);
        student1.setName(name);
        student1.setSurname(surname);
        student1.setGroupName(groupName);
        student1.setBall(ball);
        studentList.add(student1);
    }

    public void addStudents() {

        addStudent(1, 1, "aziz", "avazov", "shunqorla", 15);
        addStudent(1, 2, "azim", "raximov", "shunqorla", 15);
        addStudent(1, 3, "rustam", "shunqorla", "shunqorla", 15);
        addStudent(1, 4, "xusan", "sayidov", "shunqorla", 15);
        addStudent(1, 5, "xasan", "asadov", "shunqorla", 15);
        addStudent(2, 6, "jamshit", "xasanov", "TITAN", 10);
        addStudent(2, 7, "azimsher", "avazov", "TITAN", 10);
        addStudent(2, 8, "moxir", "ibragimov", "TITAN", 10);
        addStudent(2, 9, "sobit", "avazov", "TITAN", 10);
        addStudent(2, 10, "najmidin", "tolipov", "TITAN", 10);
        addStudent(3, 11, "abdulaziz", "mominov", "GOlD", 30);
        addStudent(3, 12, "shoxrux", "azmib boyev", "GOlD", 30);
        addStudent(3, 13, "Abduqodir", "Yolchiyev", "GOlD", 30);
        addStudent(3, 14, "jamolidin", "avazov", "GOlD", 30);
        addStudent(3, 15, "johongir", "obidxonov", "GOlD", 30);
        addStudent(4, 16, "Nematila", "nigmatov", "G2", 25);
        addStudent(4, 17, "nosirbe", "sariboyev", "G2", 25);
        addStudent(4, 18, "shukur", "mamotqulov", "G2", 25);
        addStudent(4, 19, "dilimurod", "shukurov", "G2", 25);
        addStudent(4, 20, "rasul", "xamdamov", "G2", 25);

    }
}
