package WoodMac.NotesApp.models;

import javax.persistence.*;

@Entity
@Table(name = "notesItems")
public class NotesItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "postDate")
    private String postDate;

    @Column(name = "updateDate")
    private String updateDate;

    @Column(name = "content")
    private String content;

    public NotesItem(String title, String postDate, String updateDate, String content) {
        this.title = title;
        this.postDate = postDate;
        this.updateDate = updateDate;
        this.content = content;
    }

    public NotesItem() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPostDate() {
        return postDate;
    }

    public void setPostDate(String postDate) {
        this.postDate = postDate;
    }

    public String getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(String updateDate) {
        this.updateDate = updateDate;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
